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
    <div class="card">
      <h2 class="mb-4 text-lg font-semibold dark:text-night-50">Education</h2>
      <For each={props.education}>{(edu, index) => (
        <div class={`mb-5 flex items-start ${index() < props.education.length - 1 ? 'border-b border-dashed border-gray-200 dark:border-night-600' : ''}`}>
          <div class="ml-3 w-full space-y-5">
            <div class="justify-between sm:flex">
              <div class="space-y-2">
                <div class="font-medium dark:text-night-50">{edu.program}</div>
                <div class="space-y-1 sm:flex sm:space-x-5">
                  <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                    {edu.institution}
                  </div>
                </div>
              </div>
              <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
                <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            </div>
            <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-night-300">
              <For each={edu.description}>{(desc) => <li>{desc}</li>}</For>
            </ul>
          </div>
        </div>
      )}</For>
    </div>
  );
};

export default EducationComponent;
