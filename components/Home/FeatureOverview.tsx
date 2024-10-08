import React from "react";

export default function FeatureOverview({ landingData }: any) {
  
  return (
    <section className="block overflow-hidden bg-cover bg-center dark:text-white">
      <div className="px-5 pb-10 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-7xl rounded-2xl border dark:border-dark p-4 md:p-20">
          <div className="grid grid-cols-1 gap-16 max-[991px]:pb-0 md:grid-cols-[1.25fr_1.25fr] md:gap-[16px] lg:grid-cols-[1.25fr_340px_1.25fr]">
            <div className="flex grid-cols-1 flex-col items-start gap-16 max-[767px]:[grid-area:1/1/2/3] md:gap-24">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-[#091632] p-2.5">
                    <div className="flex">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                          fill="#2D6AE0"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold md:text-3xl">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_first_title
                    }
                  </h3>
                </div>
                <div className="max-w-[256px] max-[767px]:max-w-xs">
                  <p className="text-[#7c8aaa] dark:text-gray-400">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_first_description
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-[#26bfb61f] p-2.5">
                    <div className="flex">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
                          fill="#26BFB6"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold md:text-3xl">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_second_title
                    }{" "}
                  </h3>
                </div>
                <div className="max-w-[256px] max-[767px]:max-w-xs">
                  <p className="text-[#7c8aaa] dark:text-gray-400">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_second_description
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" h-[260px] bg-cover bg-[50%_100%] bg-no-repeat object-contain max-[991px]:mt-12 max-[991px]:bg-contain max-[991px]:[grid-area:2/1/3/3] max-[767px]:mt-4 max-[767px]:[grid-area:3/1/4/3] sm:h-[430px] sm:w-full"
              style={{
                backgroundImage: 'url("/assets/images/robot.png")',
              }}
            />

            <div className="flex grid-cols-1 flex-col items-end gap-16 max-[767px]:[grid-area:2/1/3/3] md:gap-24">
              <div className="flex flex-col items-start gap-4 text-left md:items-end md:text-right">
                <div className="flex flex-row-reverse items-center gap-4 pr-0 max-[767px]:flex-row max-[767px]:text-left">
                  <div className="rounded-full bg-[#ff5c461f] p-2.5">
                    <div className="flex">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5625 11.5938H17.9922C18.8544 10.4151 19.317 8.99158 19.3125 7.53125C19.3098 5.70042 18.5813 3.94535 17.2867 2.65076C15.9921 1.35617 14.2371 0.627686 12.4062 0.625C12.1908 0.625 11.9841 0.710602 11.8317 0.862976C11.6794 1.01535 11.5938 1.22201 11.5938 1.4375V6.00781C10.4151 5.14564 8.99158 4.683 7.53125 4.6875C5.70042 4.69019 3.94535 5.41867 2.65076 6.71326C1.35617 8.00785 0.627686 9.76292 0.625 11.5938C0.625 11.8092 0.710602 12.0159 0.862976 12.1683C1.01535 12.3206 1.22201 12.4062 1.4375 12.4062H6.00781C5.14564 13.5849 4.683 15.0084 4.6875 16.4688C4.69019 18.2996 5.41867 20.0546 6.71326 21.3492C8.00785 22.6438 9.76292 23.3723 11.5938 23.375C11.8092 23.375 12.0159 23.2894 12.1683 23.137C12.3206 22.9847 12.4062 22.778 12.4062 22.5625V17.9922C13.5849 18.8544 15.0084 19.317 16.4688 19.3125C18.2996 19.3098 20.0546 18.5813 21.3492 17.2867C22.6438 15.9921 23.3723 14.2371 23.375 12.4062C23.375 12.1908 23.2894 11.9841 23.137 11.8317C22.9847 11.6794 22.778 11.5938 22.5625 11.5938ZM7.53125 6.3125C8.30767 6.30929 9.07506 6.47897 9.77774 6.80923C10.4804 7.13949 11.1008 7.62204 11.5938 8.22188V10.7812H2.31094C2.50677 9.53694 3.14007 8.4033 4.09698 7.58416C5.05389 6.76502 6.27162 6.31411 7.53125 6.3125ZM16.4688 17.6875C15.6923 17.6907 14.9249 17.521 14.2223 17.1908C13.5196 16.8605 12.8992 16.378 12.4062 15.7781V13.2188H21.6891C21.4932 14.4631 20.8599 15.5967 19.903 16.4158C18.9461 17.235 17.7284 17.6859 16.4688 17.6875Z"
                          fill="#FF5C46"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold md:text-3xl">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_third_title
                    }
                  </h3>
                </div>
                <div className="max-w-[256px] max-[767px]:max-w-xs">
                  <p className="text-[#7c8aaa] dark:text-gray-400">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_third_description
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 text-left md:items-end md:text-right">
                <div className="flex flex-row-reverse items-center gap-4 pr-0 max-[767px]:flex-row max-[767px]:text-left">
                  <div className="rounded-full bg-[#e8157a1f] p-2.5">
                    <div className="flex">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5625 12.5938H18.9922C19.8544 11.4151 20.317 9.99158 20.3125 8.53125C20.3098 6.70042 19.5813 4.94535 18.2867 3.65076C16.9921 2.35617 15.2371 1.62769 13.4062 1.625C13.1908 1.625 12.9841 1.7106 12.8317 1.86298C12.6794 2.01535 12.5938 2.22201 12.5938 2.4375V7.00781C11.4151 6.14564 9.99158 5.683 8.53125 5.6875C6.70042 5.69019 4.94535 6.41867 3.65076 7.71326C2.35617 9.00785 1.62769 10.7629 1.625 12.5938C1.625 12.8092 1.7106 13.0159 1.86298 13.1683C2.01535 13.3206 2.22201 13.4062 2.4375 13.4062H7.00781C6.14564 14.5849 5.683 16.0084 5.6875 17.4688C5.69019 19.2996 6.41867 21.0546 7.71326 22.3492C9.00785 23.6438 10.7629 24.3723 12.5938 24.375C12.8092 24.375 13.0159 24.2894 13.1683 24.137C13.3206 23.9847 13.4062 23.778 13.4062 23.5625V18.9922C14.5849 19.8544 16.0084 20.317 17.4688 20.3125C19.2996 20.3098 21.0546 19.5813 22.3492 18.2867C23.6438 16.9921 24.3723 15.2371 24.375 13.4062C24.375 13.1908 24.2894 12.9841 24.137 12.8317C23.9847 12.6794 23.778 12.5938 23.5625 12.5938ZM8.53125 7.3125C9.30767 7.30929 10.0751 7.47897 10.7777 7.80923C11.4804 8.13949 12.1008 8.62204 12.5938 9.22188V11.7812H3.31094C3.50677 10.5369 4.14007 9.4033 5.09698 8.58416C6.05389 7.76502 7.27162 7.31411 8.53125 7.3125ZM17.4688 18.6875C16.6923 18.6907 15.9249 18.521 15.2223 18.1908C14.5196 17.8605 13.8992 17.378 13.4062 16.7781V14.2188H22.6891C22.4932 15.4631 21.8599 16.5967 20.903 17.4158C19.9461 18.235 18.7284 18.6859 17.4688 18.6875Z"
                          fill="#E8157A"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold md:text-3xl">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_fourth_title
                    }
                  </h3>
                </div>
                <div className="max-w-[256px] max-[767px]:max-w-xs">
                  <p className="text-[#7c8aaa] dark:text-gray-400">
                    {
                      landingData?.landing_data
                        ?.landing_page_feature_fourth_description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
