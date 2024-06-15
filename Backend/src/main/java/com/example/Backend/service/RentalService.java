package com.example.Backend.service;

import com.example.Backend.dto.RentalDto;

import java.util.List;

public interface RentalService {
    RentalDto createRental(RentalDto rentalDto);

    RentalDto getRentalById(Long rentalId);

    List<RentalDto> getAllRentals();

    RentalDto updateRental(Long rentalId, RentalDto updatedRental);

    void deleteRental(Long rentalId);
}
