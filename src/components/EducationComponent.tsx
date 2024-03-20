import { For } from 'solid-js';
import type { Component } from 'solid-js';

type EducationEntry = {
  program: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string[];
};

type EducationProps = {
  education: EducationEntry[];
};

const EducationComponent: Component<EducationProps> = (props) => {
  return (
    <div>
      <For each={props.education}>{(edu) => (
        <div class="mb-6">
          <h3 class="font-bold">{edu.program}, {edu.institution}</h3>
          <p class="text-gray-600">{edu.startDate} – {edu.endDate}</p>
          <ul class="list-disc ml-5">
            <For each={edu.description}>{(desc) => <li>{desc}</li>}</For>
          </ul>
        </div>
      )}</For>
    </div>
  );
};

export default EducationComponent;
