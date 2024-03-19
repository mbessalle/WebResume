import { For } from 'solid-js';

// Define the types for TypeScript
type Job = {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

type Props = {
  jobs: Job[];
};

// The EmploymentHistoryComponent takes jobs as a prop and renders them
const EmploymentHistoryComponent = (props: Props) => {
  return (
    <div class="space-y-6">
      <For each={props.jobs}>
        {(job) => (
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-bold">{job.role}</h2>
            <h3 class="text-lg text-gray-600">{job.company}</h3>
            <p class="text-gray-500">{job.location}</p>
            <p class="text-gray-500">{job.startDate} - {job.endDate}</p>
            <ul class="list-disc list-inside">
              <For each={job.description}>{(item) => <li>{item}</li>}</For>
            </ul>
          </div>
        )}
      </For>
    </div>
  );
};

export default EmploymentHistoryComponent;
