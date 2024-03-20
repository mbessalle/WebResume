import { For } from 'solid-js';
import type { Component } from 'solid-js';


type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

type ExperienceProps = {
  experience: ExperienceEntry[];
};

const ExperienceComponent = (props: ExperienceProps) => {
  return (
    <div class="card">
      <h2 class="mb-4 text-lg font-semibold dark:text-night-50">Experience</h2>
      <For each={props.experience}>{(exp, index) => (
        <div class={`mb-5 flex items-start ${index() < props.experience.length - 1 ? 'border-b border-dashed border-gray-200 dark:border-night-600' : ''}`}>
          <div class="ml-3 w-full space-y-5">
            <div class="justify-between sm:flex">
              <div class="space-y-2">
                <div class="font-medium dark:text-night-50">{exp.role}</div>
                <div class="space-y-1 sm:flex sm:space-x-5">
                  <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                    {exp.company} - {exp.location}
                  </div>
                </div>
              </div>
              <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
                <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-night-300">{exp.description}</p>
          </div>
        </div>
      )}</For>
    </div>
  );
};

export default ExperienceComponent;