package com.example.Backend.Controller;

import com.example.Backend.dto.RentalDto;
import com.example.Backend.dto.VehicleDto;
import com.example.Backend.service.RentalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/rentals")
public class RentalController {

    private RentalService rentalService;

    //Build Add Rental Rest API

    @PostMapping
    public ResponseEntity<RentalDto> createRental(@RequestBody RentalDto rentalDto){
        RentalDto savedRental = rentalService.createRental(rentalDto);
        return new ResponseEntity<>(savedRental, HttpStatus.CREATED);
    }

    //Build Get Rental Rest API

    @GetMapping("{id}")
    public ResponseEntity<RentalDto> getRentalById(@PathVariable("id") Long rentalId){
        RentalDto rentalDto = rentalService.getRentalById(rentalId);
        return ResponseEntity.ok(rentalDto);
    }

    //Build Get All Rental Rest API

    @GetMapping
    public ResponseEntity<List<RentalDto>> getAllRentals(){
        List<RentalDto> rentals = rentalService.getAllRentals();
        return ResponseEntity.ok(rentals);
    }

    //Build Update Rental Rest API

    @PutMapping("{id}")
    public ResponseEntity<RentalDto> updateRental(@PathVariable("id") Long rentalId, @RequestBody RentalDto updatedRental){
        RentalDto rentalDto = rentalService.updateRental(rentalId, updatedRental);
        return ResponseEntity.ok(rentalDto);
    }

    //Build Delete Rental Rest API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteRental(@PathVariable("id") Long rentalId){
        rentalService.deleteRental(rentalId);
        return ResponseEntity.ok("Rental deleted Successfully!");
    }

}
