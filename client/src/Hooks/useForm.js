import { useState } from 'react'
import CLIENT from '../client'

export default function useForm(defaults) {
  const [error, setError] = useState(defaults)
  const [data, setData] = useState(defaults)
  const [processing, setProcessing] = useState(false)

  return {
    data,
    setData(key, value) {
      if (typeof key === 'string') {
        setData({ ...data, [key]: value })
      } else if (typeof key === 'function') {
        setData((_data) => key(_data))
      } else {
        setData(key)
      }
    },
    error,
    processing,
    async post(endpoint) {
      // empty error object
      setProcessing(true)
      setError(defaults)

      try {
        const response = await CLIENT.post(endpoint, data)
        return response.data
      } catch (err) {
        // Fill with new errors.
        console.log(err)
        const newError = err.response.data
        setError({ ...defaults, ...newError })
      } finally {
        setProcessing(false)
      }
    },
    async put(endpoint) {
      // empty error object
      setProcessing(true)
      setError(defaults)

      try {
        const response = await CLIENT.put(endpoint, data)
        if (response.data) {
          setProcessing(false)
          return response.data
        }
      } catch (err) {
        // fill with new errors.
        const newError = err.response.data
        setError({ ...defaults, ...newError })
      } finally {
        setProcessing(false)
      }
    },
    reset(...fields) {
      if (fields.length === 0) {
        setData(defaults)
      } else {
        setData(
          Object.keys(defaults)
            .filter((key) => fields.includes(key))
            .reduce(
              (carry, key) => {
                carry[key] = defaults[key]
                return carry
              },
              { ...data }
            )
        )
      }
    },
  }
}
