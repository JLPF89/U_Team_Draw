// Drawer layout for android to use in HomePage
import { DrawerLayoutAndroid, View, Text } from 'react-native';

const openModal = () => {
    console.log('Drawer opened');
}

export function HomePageDrawer() {
    return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={'left'}
      onDrawerOpen={() => {
        openModal();
      }}
      renderNavigationView={() => (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text 
            style={{
                margin: 20, 
                fontSize: 15, 
                textAlign: 'left'
            }}
           >
            Drawer Content
          </Text>
        </View>
      )}>
      {/* main content */}
    </DrawerLayoutAndroid>
  );
}
export default HomePageDrawer;
