import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>I will work on</label>
      <TaskInput
        id='task'
        list='task-suggestions'
        placeholder='Give a name to your project'
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", {
          valueAsNumber: true,
        })}
      />
      <span>minutes.</span>
    </FormContainer>
  );
}
