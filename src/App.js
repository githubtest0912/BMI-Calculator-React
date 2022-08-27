import './App.css';
import Calculator from './components/Hooks/BMICalculator/Calculator';
import LifeCycle from './components/Hooks/Lifecycle';
import ComponentDidMount from './components/Hooks/lifecycle/ComponentDidMount';
import ComponentDidUpdate from './components/Hooks/lifecycle/ComponentDidUpdate';
import ComponentWillUnmount from './components/Hooks/lifecycle/ComponentWillUnmount';

import StateButton from './components/Hooks/StateButton';
import UseCallbackExample from './components/Hooks/UseCallbackExample';
import UseDebugValueExample from './components/Hooks/UseDebugValueExample';
import UseEffectExample from './components/Hooks/UseEffectExample';
import UseLayoutExample from './components/Hooks/UseLayoutExample';
import UseMemoExample from './components/Hooks/UseMemoExample';
import UseDeffer from './components/Hooks/UseDeffer';
import Effect from './components/Hooks/Effect';
import StateExample from './components/Hooks/StateExample';
import Ref from './components/Hooks/Ref';
import Reducer from './components/Hooks/Reducer';
import StateWithArray from './components/Hooks/StateWithArray';
import StateWithObject from './components/Hooks/StateWithObject';
import StateCounter from './components/Hooks/StateCounter';
import ReducerTODO from './components/Hooks/ReducerTODO';
import RefFocus from './components/Hooks/RefFocus';
import UseIdExample from './components/Hooks/UseIdExample';
import UseTransitionExample from './components/Hooks/UseTransitionExample';


function App() {
  return (
    <div>
     <StateExample />
      <Effect />
      <Ref />
      <Reducer />
      <StateWithArray />
      <StateWithObject />
      <StateCounter />
      <ReducerTODO />
      <RefFocus /> 

      <UseIdExample /> 
      <UseTransitionExample /> 
      <UseDeffer />
       <StateButton />
      <UseMemoExample />
      <UseLayoutExample />
      <UseCallbackExample />
      <UseDebugValueExample /> 
      <UseEffectExample /> 
     

      <LifeCycle />
      <ComponentDidMount />
      <ComponentDidUpdate />
      <ComponentWillUnmount />
     

     
       <Calculator />
    </div>
  );
}

export default App;
