import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useFetchCategories'

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    // cleaning the listener
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'><Category /></Item>
          : categories.map(item => <Item key={item.id}><Category {...item} path={`/pet/${item.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
