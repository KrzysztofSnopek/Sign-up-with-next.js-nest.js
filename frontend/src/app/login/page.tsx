export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-neutral-50 justify-center items-start inline-flex">
      <div className="w-1/3 self-stretch px-3 pt-[319px] pb-[287px] bg-neutral-800 flex-col justify-end items-center inline-flex">
        <div className="self-stretch h-[376px] p-6 flex-col justify-center items-start inline-flex">
          <div className="self-stretch h-[328px] pt-12 flex-col justify-start items-start flex">
            <div className="w-[432px] text-neutral-50 text-5xl font-normal font-['Roboto Slab'] leading-[56.02px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="w-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-4 h-8 relative bg-white bg-opacity-0">
                <div className="w-4 h-8 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal tracking-tight">
              — John Doe
            </div>
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch p-6 flex-col justify-center items-center inline-flex">
          <div className="h-[354px] flex-col justify-start items-start flex">
            <div className="h-[92px] flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-center text-black text-opacity-90 text-2xl font-normal font-['Roboto Slab'] leading-loose">
                    Welcome
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-opacity-60 text-base font-normal font-['Roboto'] leading-7 tracking-tight">
                  Example Description
                </div>
              </div>
              <div className="h-8 bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <div className="w-8 h-8 relative bg-white bg-opacity-0">
                  <div className="w-8 h-6 left-0 top-[4px] absolute"></div>
                </div>
              </div>
            </div>
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-14 flex-col justify-start items-start gap-[3px] flex">
              <div className="self-stretch h-14 px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                <div className="self-stretch py-4 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-black text-opacity-90 text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                    Value
                  </div>
                </div>
                <div className="h-0.5 px-1 bg-white justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-opacity-60 text-xs font-normal font-['Roboto'] leading-3 tracking-tight">
                    Email address
                  </div>
                </div>
              </div>
            </div>
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-14 flex-col justify-start items-start gap-[3px] flex">
              <div className="self-stretch h-14 px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                <div className="self-stretch py-4 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-black text-opacity-90 text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                    **********
                  </div>
                </div>
                <div className="h-0.5 px-1 bg-white justify-start items-center gap-2.5 inline-flex">
                  <div className="text-black text-opacity-60 text-xs font-normal font-['Roboto'] leading-3 tracking-tight">
                    Password
                  </div>
                </div>
              </div>
            </div>
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-[50px] bg-neutral-800 rounded shadow flex-col justify-center items-center flex">
              <div className="px-[22px] py-3 justify-center items-center gap-2 inline-flex">
                <div className="text-white text-[15px] font-medium font-['Roboto'] uppercase leading-relaxed tracking-wide">
                  Sign in
                </div>
              </div>
            </div>
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-5 flex-col justify-center items-center flex">
              <div>
                <span className="text-black text-opacity-90 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">
                  Don't have an account?
                </span>
                <span className="text-black text-opacity-90 text-sm font-bold font-['Roboto'] leading-tight tracking-tight">
                  Sign up for free
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
