// import {
//   ActivityIndicator,
//   Dimensions,
//   FlatList,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   ToastAndroid,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const {height} = Dimensions.get('window');
// const API = () => {
//   const [data, setData] = useState([]);

//   const ItemSeparator = () => {
//     return <View style={styles.separator} />;
//   };

//   const getAPIData = async () => {
//     const url = 'https://dummyjson.com/products';
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         setData(res.products);
//       })
//       .catch(e => {
//         console.log(e);
//         ToastAndroid.show('You are not connected to Internet', 200);
//       });
//     // .then(setData(res));
//   };

//   const ITEM_HEIGHT = 6000; // Fixed height of each item

//   const getItemLayout = (data, index) => ({
//     length: ITEM_HEIGHT,
//     offset: ITEM_HEIGHT * index,
//     index,
//   });

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   const Prodcuts = ({item}) => {
//     return (
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//           marginVertical: 10,
//         }}>
//         <View style={{marginVertical: 20}}>
//           <Text style={{fontWeight: 'bold'}}>Item Name</Text>
//           <Text> {item.category}</Text>
//           <Text>Item Price : {item.price}</Text>
//         </View>
//         <Image
//           source={{uri: item.thumbnail}}
//           style={{
//             width: 200,
//             height: 200,
//             borderRadius: 10,
//           }}
//         />
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text style={{fontSize: 30}}>List with API call</Text>
//       <FlatList
//         data={[
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//           ...data,
//         ]}
//         keyExtractor={(item, index) => index}
//         renderItem={Prodcuts}
//         ItemSeparatorComponent={ItemSeparator}
//         ListEmptyComponent={
//           <View
//             style={{
//               flex: 1,
//               height: height,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <ActivityIndicator size={'large'} color={'black'} />
//           </View>
//         }
//         ListHeaderComponent={
//           <Text style={{marginBottom: 40, textAlign: 'center'}}>Heading</Text>
//         }
//         ListFooterComponent={
//           <Text style={{marginBottom: 40, textAlign: 'center'}}>Footer</Text>
//         }
//         ListFooterComponentStyle={styles.footerContainer}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         getItemLayout={getItemLayout}
//       />
//     </View>
//   );
// };

// export default API;

// const styles = StyleSheet.create({
//   separator: {
//     height: 2,
//     backgroundColor: '#000',
//     // marginLeft: 16,
//   },
//   footerContainer: {
//     borderWidth: 1,
//     borderColor: 'yellow',
//     margin: 50,
//   },
//   columnWrapper: {
//     justifyContent: 'space-evenly',
//     // borderWidth: 2,
//     // borderColor: 'red',
//     // margin: 6,
//     borderColor: 'black',
//     borderWidth: 1,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//     padding: 5,
//   },
// });
// ///https://codedamn.com/news/reactjs/axios-network-requests
// import {
//   ActivityIndicator,
//   Dimensions,
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   ToastAndroid,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const {height} = Dimensions.get('window');

// const API = () => {
//   const [data, setData] = useState([]);

//   const ItemSeparator = () => {
//     return <View style={styles.separator} />;
//   };

//   const getAPIData = async () => {
//     const url = 'https://dummyjson.com/products';
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         setData(res.products);
//       })
//       .catch(e => {
//         console.log(e);
//         ToastAndroid.show('You are not connected to Internet', 200);
//       });
//   };

//   const ITEM_HEIGHT = 250; // Fixed height of each item

//   const getItemLayout = (data, index) => ({
//     length: ITEM_HEIGHT,
//     offset: ITEM_HEIGHT * index,
//     index,
//   });

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   const Products = ({item}) => {
//     return (
//       <View style={styles.itemContainer}>
//         <View style={styles.itemTextContainer}>
//           <Text style={styles.itemTitle}>Item Name</Text>
//           <Text>{item.category}</Text>
//           <Text>Item Price: {item.price}</Text>
//         </View>
//         <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>List with API call</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item, index) => item.id.toString()}
//         renderItem={Products}
//         ItemSeparatorComponent={ItemSeparator}
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <ActivityIndicator size={'large'} color={'black'} />
//           </View>
//         }
//         ListHeaderComponent={<Text style={styles.listHeader}>Heading</Text>}
//         ListFooterComponent={<Text style={styles.listFooter}>Footer</Text>}
//         ListFooterComponentStyle={styles.footerContainer}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         // getItemLayout={getItemLayout}
//       />
//     </View>
//   );
// };

// export default API;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//   },
//   itemTextContainer: {
//     marginVertical: 20,
//   },
//   itemTitle: {
//     fontWeight: 'bold',
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   separator: {
//     height: 2,
//     backgroundColor: '#000',
//   },
//   footerContainer: {
//     borderWidth: 1,
//     borderColor: 'yellow',
//     margin: 50,
//   },
//   columnWrapper: {
//     justifyContent: 'space-evenly',
//     borderColor: 'black',
//     borderWidth: 1,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//     padding: 5,
//   },
//   emptyContainer: {
//     flex: 1,
//     height: height,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listHeader: {
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   listFooter: {
//     marginBottom: 40,
//     textAlign: 'center',
//   },
// });
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const {height} = Dimensions.get('window');

const API = () => {
  const [data, setData] = useState([]);

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const getAPIData = async () => {
    const url = 'https://dummyjson.com/products';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res.products);
      })
      .catch(e => {
        console.log(e);
        ToastAndroid.show('You are not connected to Internet', 200);
      });
  };

  const ITEM_HEIGHT = 100; // Adjust this height according to the actual height of each item

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  useEffect(() => {
    getAPIData();
  }, []);

  const Products = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Item Name</Text>
          <Text>{item.category}</Text>
          <Text>Item Price: {item.price}</Text>
        </View>
        <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List with API call</Text>
      <FlatList
        // data={data}
        data={[
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
          ...data,
        ]}
        keyExtractor={(item, index) => index}
        renderItem={Products}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <ActivityIndicator size={'large'} color={'black'} />
          </View>
        }
        ListHeaderComponent={<Text style={styles.listHeader}>Heading</Text>}
        ListFooterComponent={<Text style={styles.listFooter}>Footer</Text>}
        ListFooterComponentStyle={styles.footerContainer}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        getItemLayout={getItemLayout}
        initialScrollIndex={3}
        initialNumToRender={8}
        // inverted
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
      />
    </View>
  );
};

export default API;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    height: 150, // This should match ITEM_HEIGHT
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 15,
  },
  itemTextContainer: {
    justifyContent: 'center',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  separator: {
    height: 2,
    backgroundColor: '#000',
  },
  footerContainer: {
    borderWidth: 1,
    borderColor: 'yellow',
    margin: 50,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeader: {
    marginBottom: 40,
    textAlign: 'center',
  },
  listFooter: {
    marginBottom: 40,
    textAlign: 'center',
  },
});
