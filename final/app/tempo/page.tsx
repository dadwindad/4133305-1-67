"use client";

import Modal from "@/components/tempo/Modal";
import Step from "@/components/tempo/Step";
import Table from "@/components/tempo/Table";
import { FC } from "react";

const Tempo: FC = () => {
  return (
    <>
      <div className="flex-col">
        <div>
          <Step />
        </div>
        <div>
          <Table />

          <Modal />
          <button className="btn">fdfds</button>
        </div>
      </div>
    </>
  );
};

export default Tempo;
