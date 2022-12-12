import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>I will work on</label>
          <input id='task' />
          <label htmlFor='minutesAmount'>for</label>
          <input id='minutesAmount' type='number' />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type='submit'>
          <Play size={24} />
          Start
        </button>
      </form>
    </HomeContainer>
  );
}
