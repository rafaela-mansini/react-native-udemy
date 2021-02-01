import React from 'react';
import  { Text, StyleSheet, SafeAreaView } from 'react-native';
import { Comp1, Comp2 } from './components/Components';
import MinMax from './components/MinMax'
import Random from './components/Random'
import Title from './components/Title'
import Button from './components/Button'
import Counter from './components/Counter'
import Father from './components/indirect/Father'
import CounterV2 from './components/counter/Counter'
import Diferences from './components/Diferences'
import Conditionals from './components/Conditionals'
import Family from './components/relations/Family'
import Members from './components/relations/Members';
import AuthLogged from './components/conditionalComponent/authLogged'
import Products from './components/products/ListV2'
import TextName from './components/TextName'
import Flexbox from './components/layout/FlexboxV4';

export default () => (
    <SafeAreaView style={style.App}>
        {/* <Comp1 />
        <Comp2 />
        <MinMax min="3" max="20" />
        <MinMax min={8} max={72} />
        <Random min={10} max={88} random={985} />
        <Title first={'Cadastro produto'} second={'Tela de cadastro'} />
        <Button />
        <Counter initial={80} steps={20} />
        <Father /> 
         <CounterV2 />
         <Diferences />
         <Conditionals num={70} />
        <Family>
            <Members name="Ana" lastname="Silva" />
            <Members name="Julia" lastname="Silva" />
        </Family>

        <Family>
            <Members name="Carlos" lastname="Arruda" />
            <Members name="Joãozinho" lastname="Arruda" />
        </Family>
        <AuthLogged user={{name: 'Gui', email: 'gui@gui.com'}} />
        <Products />
        <TextName />
        */}
        <Flexbox />
        
        
    </SafeAreaView>

)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#CCC',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})