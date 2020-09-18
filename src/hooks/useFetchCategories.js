import { useState, useEffect } from 'react'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.behagoras.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
      .finally(() => setLoading(false))
  }, [])
  return { categories, loading }
}
