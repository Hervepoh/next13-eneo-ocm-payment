type Payment  = {
    ID : string
    REGION : string
    // DIVISION : string
    // AGENCE : string
    // CODE_AGENCE : string
    // CONTRAT : string
    // FACTURE : string
    // REFERENCE_TANGO : string
    // PAID_AMOUNT  : string
    // REFERENCE_ENEO  : string
    // PAID_DATE  : string
    // STATUT_OM  : string
    // PAYMENT_YEAR  : strin
}

let payments: Payment[] = [{ID:'1',REGION:'DRD'}];

export const getPayments = () => payments;
export const addPayment = (payment: Payment) => {
    payments.push(payment);
}
export const deletePayment = (id: string) => {
   payments = payments.filter((payment) => payment.ID !== id);
}

export const updatePayment = (id:string ,updatedPayement: any) => {
   const payment = payments.find((payment) => payment.ID == id);
   if (payment) {
    payment.REGION = updatedPayement.REGION
    return payment
   }else {
    throw new Error('Payment Not Found')
   }
 }

 export const getById = (id:string) => {
    return payments.find((payment) => payment.ID == id);
   
  }