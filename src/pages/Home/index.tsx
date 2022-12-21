import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { useState } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Fill the task"),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles([...cycles, newCycle]);

    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
        <FormContainer>
          <label htmlFor='task'>I will work on</label>
          <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Give a name to your project'
            {...register("task")}
          />

          <datalist id='task-suggestions'>
            <option value='1'></option>
            <option value='2'></option>
            <option value='3'></option>
            <option value='4'></option>
          </datalist>

          <label htmlFor='minutesAmount'>for</label>
          <MinutesAmountInput
            id='minutesAmount'
            type='number'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount")}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type='submit' disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
