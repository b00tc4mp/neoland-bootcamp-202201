
import { useEffect, useState } from 'react'

function Order({ token, orderId }) {
    
    useEffect(() => {
        try {
            retrieveOrder(token, orderId)
                .then(order => {
                    // TODO
                }
        } catch (error) {
            
        }
    })
}

export default Order