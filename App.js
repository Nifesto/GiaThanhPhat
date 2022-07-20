import React from 'react';
import {View, StatusBar} from 'react-native';
import ConfirmOTP from './src/screens/authStacks/confirmOTP';
import Home from './src/screens/home';
import AppNavigation from './src/navigation';
import Login from './src/screens/authStacks/Login';
import Register from './src/screens/authStacks/register';
import ForgetPass from './src/screens/authStacks/forgetPass';
import MyTabBar from './src/navigation/myTabBar';
import Header from './src/component/header';
import Cart from './src/screens/Cart';
import HomeWallet from './src/screens/wallet/homeWallet';
import WithdrawMoney from './src/screens/wallet/withdrawMoney';
import AllProducts from './src/screens/allProducts';
import AddBank from './src/screens/wallet/addAccBank';
import ListBanks from './src/screens/wallet/listBank';
import ReceiptMoney from './src/screens/wallet/receiptMoney';
const App = () => {
  return (
    // <Provider store={store}>
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <AppNavigation />
    </View>
    // </Provider>
  );
};

export default App;
