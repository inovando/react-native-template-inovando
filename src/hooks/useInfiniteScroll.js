import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import api from 'services/api';

function useInfiniteScroll(endpoint) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [onEndReached, setOnEndReached] = useState(true);
  const perPage = 10;

  async function loadData(pageNumber = page, shouldRefresh = false) {
    if ((total && pageNumber > Math.floor(total / perPage)) || loading) return;

    setLoading(true);

    const params = {
      _limit: perPage,
      _page: pageNumber,
    };

    if (shouldRefresh) {
      setRefreshing(true);
    }

    try {
      const response = await api.get(endpoint, {
        params,
      });
      setData(shouldRefresh ? response.data : [...data, ...response.data]);
      setTotal(parseInt(response.headers['x-total-count'], 10));
      setPage(pageNumber + 1);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return {
    initialNumToRender: perPage,
    contentContainerStyle: { flexGrow: 1 },
    data,
    keyExtractor: (item) => String(item.id),
    onEndReached: () => {
      if (onEndReached) return;
      loadData();
      setOnEndReached(true);
    },
    onEndReachedThreshold: 0.1,
    ListFooterComponent: loading && <ActivityIndicator color="#000" />,
    refreshing,
    onRefresh: () => loadData(1, true),
    showsVerticalScrollIndicator: false,
    onMomentumScrollBegin: () => setOnEndReached(false),
  };
}

export default useInfiniteScroll;
