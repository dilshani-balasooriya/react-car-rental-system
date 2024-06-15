package com.example.Backend.Mapper;

import com.example.Backend.dto.RentalDto;
import com.example.Backend.entity.Customer;
import com.example.Backend.entity.Rental;
import com.example.Backend.entity.Vehicle;
import com.example.Backend.repository.CustomerRepository;
import com.example.Backend.repository.VehicleRepository;
import org.springframework.stereotype.Component;

@Component
public class RentalMapper {

    private final VehicleRepository vehicleRepository;
    private final CustomerRepository customerRepository;

    public RentalMapper(VehicleRepository vehicleRepository, CustomerRepository customerRepository) {
        this.vehicleRepository = vehicleRepository;
        this.customerRepository = customerRepository;
    }

    public RentalDto mapToRentalDto(Rental rental){
        return new RentalDto(
                rental.getId(),
                rental.getVehicle().getId(),
                rental.getCustomer().getId(),
                rental.getStartDate(),
                rental.getEndDate(),
                rental.getTotalCost()
        );
    }

    public Rental mapToRental(RentalDto rentalDto){
        Rental rental = new Rental();
        rental.setId(rentalDto.getId());
        Vehicle vehicle = vehicleRepository.findById(rentalDto.getVehicleId()).orElse(null);
        Customer customer = customerRepository.findById(rentalDto.getCustomerId()).orElse(null);
        rental.setVehicle(vehicle);
        rental.setCustomer(customer);
        rental.setStartDate(rentalDto.getStartDate());
        rental.setEndDate(rentalDto.getEndDate());
        rental.setTotalCost(rentalDto.getTotalCost());
        return rental;
    }
}
