query getCustomer($customerId : ID!) {
  customerData : Customer(id: 125) {
    id,
    first_name,
    last_name,
    email,
    Reviews {
      id,
      date,
      status,
      comment
    }
  },
  allReviewsData : allReviews{
  id,
  date,
  Customer {
    id
  }
}
}
