import React, { useEffect, useState } from 'react';
import { searchAPI } from '../../api/searchAPI';
import ListView from '../../components/ListView/ListView';
import Loader from '../../components/Loader/Loader';
import SearchField from '../../components/SearchField/SearchField';
import { debounce } from '../../utils/debounce';
import './Search.css';
const Search = () => {
  const [dataHits, setDataHit] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onSearchDebounce = debounce(async (e) => {
    setLoading(true);
    const { hits } = await searchAPI.search(
      `https://hn.algolia.com/api/v1/search?query=${e.target.value}`
    );
    setDataHit(hits);
    setLoading(false);
  }, 300);

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);

      const { hits } = await searchAPI.search(
        `https://hn.algolia.com/api/v1/search?query=''`
      );
      setDataHit(hits);
      setLoading(false);
    };
    getSearch();
  }, []);

  return (
    <div className="search-wrapper">
      <h1 data-testid="titleSearchHit">Search for Hits</h1>
      <SearchField
        className="search-input"
        placeholder="State debugger for React apps"
        onChange={onSearchDebounce}
      />
      <Loader loading={isLoading}>
        <ListView data={dataHits} className="list-view" />
      </Loader>
    </div>
  );
};

export default Search;
