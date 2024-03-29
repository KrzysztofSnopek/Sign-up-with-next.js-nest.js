import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const payload = {
      email: user.email,
    };

    return {
      user,
      jwtTokens: this.generateTokens(payload),
    };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (user && (await compare(dto.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('The email or password is not correct');
  }

  async refreshToken(user: any) {
    const payload = {
      email: user.email,
    };
    return this.generateTokens(payload);
  }

  private async generateTokens(payload: { email: string }) {
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '2h',
        secret: process.env.jwtSecretKey,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.jwtRefreshTokenKey,
      }),
    };
  }
}
