import { For } from 'solid-js';
import type { Component } from 'solid-js';

// Define the structure of a single experience entry
type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

// Define the structure of the props expected by the ExperienceComponent
type ExperienceProps = {
  experience: ExperienceEntry[];
};

const ExperienceComponent: Component<ExperienceProps> = (props) => {
  return (
    <div>
      <For each={props.experience}>{(exp) => (
        <div class="mb-6">
          <h3 class="font-bold">{exp.role} at {exp.company}</h3>
          <p class="text-gray-600">{exp.location}</p>
          <p class="text-gray-600">{exp.startDate} – {exp.endDate}</p>
          <ul class="list-disc ml-5">
            <For each={exp.description}>{(desc) => <li>{desc}</li>}</For>
          </ul>
        </div>
      )}</For>
    </div>
  );
};

export default ExperienceComponent;
