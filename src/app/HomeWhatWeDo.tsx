import React from "react";
import LineAndText from "@/components/line/LineAndText";
import Action from "@/components/actions/Action";


const HomeWhatWeDo = () => {
  return (
    <section className=" relative w-full h-full p-[3.2rem] py-[6.4rem] lg:p-[6.4rem] flex flex-col items-start justify-between gap-0 ">
      <LineAndText text="WHAT WE DO" />
      <div className="w-full h-fit flex flex-col gap-[3.2rem] lg:gap-[6.4rem] lg:pl-[6.4rem] pt-[3.2rem] lg:pt-[6.4rem] justify-center">
        <div className="w-full">
          <h3
            data-text-reveal
            className="merri-bold bold text-[3.2rem] lg:text-[4.8rem] w-full lg:w-[60vw]"
          >
            We are creating a place where children with special needs can
            thrive.
          </h3>
        </div>
      </div>

      <div className="mt-[2.4rem] h-fit lg:mt-[6.4rem] grid lg:grid-cols-2 gap-10 grid-cols-1 lg:px-[6.4rem]">
        <Action 
          title="HBB Christian Schools"
          body="We currently have 12 schools spread across Indonesia. We encourage good education  as well as low tuition fees due to their financial disability."
          imageUrl="/images/swing.jpeg"
          readMoreLink=""
          donationLink=""
          buttonColor="white"
        />
        <Action 
          title="Little House"
          body="Provided math and English tutors, this activity is open to all social groups and religious backgrounds."
          imageUrl="https://images.unsplash.com/photo-1489451058181-433dc9ffa757?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          readMoreLink=""
          donationLink=""
          buttonColor="white"
        />
        <Action 
          title="Character Building"
          body="We started character building school with the aim of shaping children's behavior. We realize that character is one of the important aspects of life, both in religious and social life."
          imageUrl="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          readMoreLink=""
          donationLink=""
          buttonColor="white"
        />
        <Action 
          title="HBB Shelter Home"
          body="Our foundation also provides attention to homeless children, children whose families have been broken up, and also disadvantaged adults."
          imageUrl="https://images.unsplash.com/photo-1479244209311-71e35c910f59?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          readMoreLink=""
          donationLink=""
          buttonColor="white"
        />
        
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
