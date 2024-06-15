package com.example.Backend.service.impl;

import com.example.Backend.Mapper.RentalMapper;
import com.example.Backend.dto.RentalDto;
import com.example.Backend.entity.Rental;
import com.example.Backend.exception.ResourceNotFoundException;
import com.example.Backend.repository.RentalRepository;
import com.example.Backend.repository.VehicleRepository; // Import VehicleRepository
import com.example.Backend.repository.CustomerRepository; // Import CustomerRepository
import com.example.Backend.entity.Vehicle; // Import Vehicle
import com.example.Backend.entity.Customer; // Import Customer
import com.example.Backend.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RentalServiceImpl implements RentalService {

    private final RentalRepository rentalRepository;
    private final RentalMapper rentalMapper;
    private final VehicleRepository vehicleRepository; // Autowire VehicleRepository
    private final CustomerRepository customerRepository; // Autowire CustomerRepository

    @Autowired
    public RentalServiceImpl(RentalRepository rentalRepository, RentalMapper rentalMapper, VehicleRepository vehicleRepository, CustomerRepository customerRepository) {
        this.rentalRepository = rentalRepository;
        this.rentalMapper = rentalMapper;
        this.vehicleRepository = vehicleRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public RentalDto createRental(RentalDto rentalDto) {
        // Map the DTO to an entity
        Rental rental = rentalMapper.mapToRental(rentalDto);

        // Save the entity to the database
        rental = rentalRepository.save(rental);

        // Map the saved entity back to a DTO and return it
        return rentalMapper.mapToRentalDto(rental);
    }

    @Override
    public RentalDto getRentalById(Long rentalId) {
        Rental rental = rentalRepository.findById(rentalId).orElseThrow(() -> new ResourceNotFoundException("Rental isn't exists with given id : " + rentalId));
        return rentalMapper.mapToRentalDto(rental);
    }


    @Override
    public List<RentalDto> getAllRentals() {
        List<Rental> rentals = rentalRepository.findAll();
        return rentals.stream().map(rentalMapper::mapToRentalDto).collect(Collectors.toList());
    }

    @Override
    public RentalDto updateRental(Long rentalId, RentalDto updatedRental) {
        Rental rental = rentalRepository.findById(rentalId).orElseThrow(() -> new ResourceNotFoundException("Rental isn't exists with given id : " + rentalId));

        // Fetch the Vehicle and Customer entities from their repositories based on their IDs
        Vehicle vehicle = vehicleRepository.findById(updatedRental.getVehicleId())
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle isn't exists with given id : " + updatedRental.getVehicleId()));

        Customer customer = customerRepository.findById(updatedRental.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer isn't exists with given id : " + updatedRental.getCustomerId()));

        // Update the rental object with the new data from updatedRental
        rental.setVehicle(vehicle);
        rental.setCustomer(customer);
        rental.setStartDate(updatedRental.getStartDate());
        rental.setEndDate(updatedRental.getEndDate());
        rental.setTotalCost(updatedRental.getTotalCost());

        // Save the updated rental object
        Rental updatedRentalObj = rentalRepository.save(rental);

        return rentalMapper.mapToRentalDto(updatedRentalObj);
    }

    @Override
    public void deleteRental(Long rentalId) {
        Rental rental = rentalRepository.findById(rentalId).orElseThrow(() -> new ResourceNotFoundException("Rental isn't exists with given id : " + rentalId));
        rentalRepository.deleteById(rentalId);
    }
}
