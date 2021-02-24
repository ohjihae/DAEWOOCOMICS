import React, { useCallback, useEffect, useState } from 'react';
import Home from './Home'

import api from '../api/list'

const HomeContainer = ({navigation}) => {

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
    <Home navigation={navigation} list={list}></Home>
  )
}
export default HomeContainer;