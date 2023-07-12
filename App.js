import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import FontsLoad from './Components/Theme/FontsLoad';
import { StatusBar } from 'expo-status-bar';
import Brands from './Components/Brands/Brands';
import NavBar from './Components/Common/NavBar';
import AppBar from './Components/Common/AppBar';
import Theme from './Components/Theme/Theme';
import Main from './Components/UI/Main';
import Models from './Components/Models/Models';
import Catalog from './Components/Catalog/Catalog';
import CatalogItem from './Components/Catalog/CatalogItem';
import Product from './Components/Product/Product';
import Wish from './Components/Wish/Wish';
import Search from './Components/Search/Search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FontsLoad>
      <NativeBaseProvider theme={Theme}>
            <NavigationContainer theme={Theme}>
            <Main>
              <Stack.Navigator initialRouteName="Brands">
                <Stack.Screen name="Brands" component={Brands} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="Models" component={Models} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="Catalog" component={Catalog} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="CatalogItem" component={CatalogItem} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="Product" component={Product} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="Search" component={Search} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
                <Stack.Screen name="Wish" component={Wish} options={ () => ({ header: (props) => <AppBar  {...props}/> }) } />
              </Stack.Navigator>
              <NavBar/>
            </Main>
            </NavigationContainer>
          <StatusBar style="auto" />
      </NativeBaseProvider>
    </FontsLoad>
  );
}