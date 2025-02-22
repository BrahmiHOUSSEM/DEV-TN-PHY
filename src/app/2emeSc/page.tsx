import React from "react";
import Devoir from "../component/Devoir";

const page = () => {
  return (
    <div className="flex mt-12 px-8 justify-between">
      <div className="border-r border-secondary p-2 flex flex-col flex-1">
        <h1 className="text-xl font-bold text-main">1er trimestre</h1>
        <Devoir name="DC-1 Exemple-1" date="05/11/2022" url="1" />
        <Devoir name="DC-1 Exemple-2" date="03/09/2022" url="2" />
        <Devoir name="DS-1 Exemple-3" date="06/01/2022" url="3" />
        <Devoir name="DC-1 Exemple-4" date="19/01/2022" url="5" />
        <Devoir name="DS-1 Exemple-5" date="16/09/2022" url="1" />
        <Devoir name="DC-1 Exemple-6" date="22/12/2022" url="2" />
        <Devoir name="DC-1 Exemple-7" date="19/11/2022" url="3" />
        <Devoir name="DC-1 Exemple-8" date="04/10/2022" url="5" />
        <Devoir name="DS-1 Exemple-4" date="19/01/2022" url="5" />
        <Devoir name="DC-1 Exemple-5" date="16/09/2022" url="1" />
        <Devoir name="DC-1 Exemple-6" date="22/12/2022" url="2" />
        <Devoir name="DS-1 Exemple-7" date="19/11/2022" url="3" />
        <Devoir name="DS-1 Exemple-8" date="04/10/2022" url="5" />
      </div>
      <div className="border-r border-secondary p-2 flex flex-col flex-1">
        <h1 className="text-xl font-bold text-main">2eme trimestre</h1>
        <Devoir name="DC-2 Exemple-1" date="09/01/2024" url="6" />
        <Devoir name="DC-2 Exemple-1" date="05/12/2022" url="7" />
        <Devoir name="DC-2 Exemple-2" date="30/04/2022" url="8" />
        <Devoir name="DS-2 Exemple-3" date="06/01/2020" url="9" />
        <Devoir name="DC-2 Exemple-4" date="29/01/2022" url="10" />
        <Devoir name="DS-2 Exemple-5" date="16/09/2022" url="4" />
        <Devoir name="DC-2 Exemple-6" date="22/12/2022" url="12" />
        <Devoir name="DC-2 Exemple-7" date="09/01/2023" url="6" />
        <Devoir name="DC-2 Exemple-8" date="05/11/2020" url="7" />
        <Devoir name="DC-2 Exemple-9" date="03/09/2022" url="8" />
        <Devoir name="DS-2 Exemple-10" date="06/01/2022" url="9" />
        <Devoir name="DC-2 Exemple-11" date="19/01/2022" url="10" />
        <Devoir name="DS-2 Exemple-12" date="16/09/2022" url="11" />
        <Devoir name="DC-2 Exemple-13" date="22/12/2022" url="12" />
      </div>
      <div className=" p-2 flex flex-col flex-1">
        <h1 className="text-xl font-bold text-main">3eme trimestre</h1>
        <Devoir name="DC-3 Exemple-1" date="09/01/2024" url="6" />
        <Devoir name="DC-3 Exemple-1" date="05/11/2023" url="7" />
        <Devoir name="DC-3 Exemple-2" date="03/09/2022" url="8" />
        <Devoir name="DS-3 Exemple-3" date="06/01/2024" url="9" />
        <Devoir name="DC-3 Exemple-4" date="19/01/2022" url="10" />
        <Devoir name="DS-3 Exemple-5" date="16/09/2022" url="4" />
        <Devoir name="DC-3 Exemple-6" date="22/12/2023" url="12" />
        <Devoir name="DC-3 Exemple-7" date="09/01/2023" url="6" />
        <Devoir name="DC-3 Exemple-8" date="05/11/2022" url="7" />
        <Devoir name="DC-3 Exemple-9" date="03/09/2024" url="8" />
        <Devoir name="DS-3 Exemple-10" date="06/01/2022" url="9" />
        <Devoir name="DC-3 Exemple-11" date="19/01/2022" url="10" />
        <Devoir name="DS-3 Exemple-12" date="16/09/2022" url="11" />
        <Devoir name="DC-3 Exemple-13" date="22/12/2022" url="12" />
      </div>
    </div>
  );
};

export default page;
