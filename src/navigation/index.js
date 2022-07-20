import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import Chat from '../screens/Chat';
import Profile from '../screens/profile';
import Notify from '../screens/notify';
import Images from '../assets';
import MyTabBar from './myTabBar';
import Register from '../screens/authStacks/register';
import Login from '../screens/authStacks/Login';
import ForgetPass from '../screens/authStacks/forgetPass';
import ConfirmPass from '../screens/authStacks/confirmPass';
import ConfirmOTP from '../screens/authStacks/confirmOTP';
import ConfirmPassword from '../screens/authStacks/confirmPass';
import Home from '../screens/home';
import AllProducts from '../screens/allProducts';
import DetailProducts from '../screens/detailProducts';
import InforUser from '../screens/inforUser';
import HomeWallet from '../screens/wallet/homeWallet';
import FilterProduct from '../screens/allProducts/filterProduct';
import RechargeMoney from '../screens/wallet/rechargeMoney';
import WithdrawMoney from '../screens/wallet/withdrawMoney';
import AddBank from '../screens/wallet/addAccBank';
import ListBanks from '../screens/wallet/listBank';
import Pay from '../screens/pay';
import Successful from '../screens/success';
import ReceiptMoney from '../screens/wallet/receiptMoney';
import ModifyBank from '../screens/wallet/modifyBank';
import Address from '../screens/address';
import AddAddress from '../screens/addAddress';
import EditAddress from '../screens/editAddress';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgetPass"
        component={ForgetPass}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ConfirmOTP"
        component={ConfirmOTP}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ConfirmPassword"
        component={ConfirmPassword}
      />
    </Stack.Navigator>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Stack.Screen
        options={{
          title: 'Trang chủ',
          tabBarIcon: Images.homeActive,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Giỏ Hàng',
          tabBarIcon: Images.iconCart,
        }}
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        options={{
          title: 'Chat',
          tabBarIcon: Images.chatActive,
        }}
        name="Messenger"
        component={Chat}
      />
      <Stack.Screen
        options={{
          title: 'Thông báo',
          tabBarIcon: Images.bellActive,
        }}
        name="Notify"
        component={Notify}
      />
      <Stack.Screen
        options={{
          title: 'Cá nhân',
          tabBarIcon: Images.gUserActive,
        }}
        name="Profiles"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="AuthStack"
          component={AuthStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TabBar"
          component={TabBar}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AllProducts"
          component={AllProducts}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailProducts"
          component={DetailProducts}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="InforUser"
          component={InforUser}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeWallet"
          component={HomeWallet}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RechargeMoney"
          component={RechargeMoney}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WithdrawMoney"
          component={WithdrawMoney}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddBank"
          component={AddBank}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ListBanks"
          component={ListBanks}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Notify"
          component={Notify}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Pay"
          component={Pay}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Successful"
          component={Successful}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ReceiptMoney"
          component={ReceiptMoney}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ModifyBank"
          component={ModifyBank}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Address"
          component={Address}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditAddress"
          component={EditAddress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
