import _ from 'lodash'
import { useMemo } from 'react'

// TODO remove in https://rucom.optimacros.com/topic/32457
export function useId() {
    return useMemo(() => _.uniqueId('icons'), [])
}
