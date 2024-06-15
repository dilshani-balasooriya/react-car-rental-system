package com.example.Backend.Mapper;

import com.example.Backend.dto.CustomerDto;
import com.example.Backend.entity.Customer;

public class CustomerMapper {
    public static CustomerDto mapToCustomerDto(Customer customer){
        return new CustomerDto(
                customer.getId(),
                customer.getName(),
                customer.getEmail(),
                customer.getPhone(),
                customer.getAddress()
        );
    }

    public static Customer mapToCustomer(CustomerDto customerDto){
        return new Customer(
                customerDto.getId(),
                customerDto.getName(),
                customerDto.getEmail(),
                customerDto.getPhone(),
                customerDto.getAddress()
        );
    }
}
