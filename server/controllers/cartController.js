import User from "../models/User.js";


// update user cartdata: /api/cart/update
export const updateCart = async (req,res) => {
    try {
        const { userId} = req;
        const {cartItems} = req.body

        await User.findByIdAndUpdate(userId, {cartItems})
        res.json({
            success: true,
            message: "Cart Update"
        })
    } catch (error) {
        console.error(error.message)
            res.json({
                success: false,
                message: error.message
            })
    }
}