const paystack = require('paystack')(ProcessingInstruction.env.PAYSTACK_SECRET_KEY);
const initializePayment = async (email, amount) => {
    try{
        const response = await paystack.transaction.initialize({
            email,
            amount: amount * 70 //Amount in kobo
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};