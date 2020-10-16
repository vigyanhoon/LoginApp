import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  VirtualizedList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { getUsers } from '../reducers/usersSlice';

const windowWidth = Dimensions.get('window').width;

const Dashboard = () => {
  const { allUsers } = useSelector((state: RootState) => state.users)
  const [currentTab, setCurrentTab] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getUsers('vigyan'))
  }, [])

  const getItem = (data, index) => {
    const selected = data[index]
    return {
      id: String(selected.id),
      title: selected.login,
      node: selected.node_id,
      avatar: selected.avatar_url,
      score: selected.score
    }
  }

  const getItemCount = (data) => {
    return data.length;
  }

  const Item = ({ title, node, score, avatar, }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View style={styles.rightContainer}>
          <Text style={styles.rowText}>{`Login - ${title}`}</Text>
          <Text style={styles.rowText}>{`Node - ${node}`}</Text>
          <Text style={styles.rowText}>{`Score - ${score}`}</Text>
        </View>
      </View>
    );
  }

  const Tab1 = <VirtualizedList data={allUsers} initialNumToRender={4}
    renderItem={({ item }) => <Item key={item.id} node={item.node} title={item.title} score={item.score} avatar={item.avatar} />}
    keyExtractor={item => item.id}
    getItemCount={getItemCount}
    getItem={getItem}
  />

  const Tab2 = <Text>Tab 1</Text>
  const Tab3 = <Text>Tab 2</Text>

  const getSelectedTab = () => {
    if (currentTab===0) return Tab1
    if (currentTab===1) return Tab2
    if (currentTab===2) return Tab3
  }

  return (
    <>
      <View style={styles.body}>
        <View style={styles.mainView}>
          {getSelectedTab()}
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab]} onPress={() => setCurrentTab(0)}>
            <View >
              <Text style={styles.tabText}>Users</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab]} onPress={() => setCurrentTab(1)}>
            <View >
              <Text style={styles.tabText}>Tab2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab]} onPress={() => setCurrentTab(2)}>
            <View >
              <Text style={styles.tabText}>Tab3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 2,
  },
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  item: {
    backgroundColor: 'lightgrey',
    marginVertical: 8,
    flexDirection: "row",
    width: windowWidth - 30,
    borderColor: 'orange',
    borderWidth: 2
  },
  avatar: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: 'orange'
  },
  rightContainer: {
    marginLeft: 20,
  },
  rowText: {
    fontSize: 15,
  },
  tabContainer: {
    backgroundColor: 'yellow',
    height: 50,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  tabText: {
    fontSize: 20
  },
});

export default Dashboard;
