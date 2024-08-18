// OCP Example
// Definition: Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.
// Abstract PaymentProcessor class
class PaymentProcessor {
    processPayment(amount) {
        throw new Error("Method 'processPayment' must be implemented.");
    }
}

// PayPalProcessor extends PaymentProcessor
class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing $${amount} payment through PayPal.`);
    }
}

// StripeProcessor extends PaymentProcessor
class StripeProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing $${amount} payment through Stripe.`);
    }
}

// Usage example
const payPalProcessor = new PayPalProcessor();
payPalProcessor.processPayment(100);

const stripeProcessor = new StripeProcessor();
stripeProcessor.processPayment(200);

// Below code Violates Open/close 
class PaymentProcessor {
    processPayment(amount, type) {
        if (type === 'PayPal') {
            console.log(`Processing $${amount} payment through PayPal.`);
        } else if (type === 'Stripe') {
            console.log(`Processing $${amount} payment through Stripe.`);
        } else {
            throw new Error('Unsupported payment type');
        }
    }
}

// Usage example
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100, 'PayPal');
paymentProcessor.processPayment(200, 'Stripe');

