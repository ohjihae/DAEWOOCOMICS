import React, { useCallback, useEffect, useState } from 'react';
import List from './List'

import api from '../api/list'

const ListContainer = ({ navigation }) => {

  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.list();
    console.log(result.data);
    // state를 갱신해서 다시 그리기
    setList(result.data);
  }, [])

  useEffect(()=>{
    // navigation 이벤트 리스너를 생성
    // 반환 값이 이벤트 리스너 해제 함수
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getList();
      }
    )
    return unsubscribe;
  }, [navigation])

  return (
    <List navigation={navigation} list={list}></List>
  )

}
export default ListContainer;