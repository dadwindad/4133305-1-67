import Card from "@/components/about/Card";
import Step from "@/components/about/Step";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <Step />
      <div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            width={200}
          />
        </figure>
      </div>
      <div className="pe-10">
        <p>
          ChatGPT is a chatbot and virtual assistant developed by OpenAI and
          launched on November 30, 2022. Based on large language models, it
          enables users to refine and steer a conversation towards a desired
          length, format, style, level of detail, and language. Successive user
          prompts and replies are considered at each conversation stage as
          context.
        </p>
      </div>

      <div className="flex flex-row">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default About;
