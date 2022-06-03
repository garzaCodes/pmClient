import { PEOPLE_MOCK } from "../../mock/dashboard.mock";
import { IPerson } from "../../models/person.model";
import PersonCard from "../personCard/person.comp";
import { useState } from "react";
import * as React from "react";

export default function ProjectManager() {
  const [people, setPeople] = useState<IPerson[]>(PEOPLE_MOCK);

  return (
    <>
      <div className="mb-3">
        <h4 className="mb-2">Project Managers</h4>
        {
          people.map((person: IPerson, index: number) => (
          <PersonCard key={index} person={person} />
        ))
        }
      </div>
    </>
  );
}
