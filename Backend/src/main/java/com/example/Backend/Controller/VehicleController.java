package com.example.Backend.Controller;

import com.example.Backend.dto.VehicleDto;
import com.example.Backend.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/vehicles")
public class VehicleController {

    private VehicleService vehicleService;

    //Build Add Vehicle Rest API

    @PostMapping
    public ResponseEntity<VehicleDto> createVehicle(@RequestBody VehicleDto vehicleDto){
        VehicleDto savedVehicle = vehicleService.createVehicle(vehicleDto);
        return new ResponseEntity<>(savedVehicle, HttpStatus.CREATED);
    }

    //Build Get Vehicle Rest API

    @GetMapping("{id}")
    public ResponseEntity<VehicleDto> getVehicleById(@PathVariable("id") Long vehicleId){
        VehicleDto vehicleDto = vehicleService.getVehicleById(vehicleId);
        return ResponseEntity.ok(vehicleDto);
    }

    //Build Get All Vehicle Rest API

    @GetMapping
    public ResponseEntity<List<VehicleDto>> getAllVehicles(){
        List<VehicleDto> vehicles = vehicleService.getAllVehicles();
        return ResponseEntity.ok(vehicles);
    }

    //Build Update Vehicle Rest API

    @PutMapping("{id}")
    public ResponseEntity<VehicleDto> updateVehicle(@PathVariable("id") Long vehicleId, @RequestBody VehicleDto updatedVehicle){
        VehicleDto vehicleDto = vehicleService.updateVehicle(vehicleId, updatedVehicle);
        return ResponseEntity.ok(vehicleDto);
    }

    //Build Delete Vehicle Rest API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable("id") Long vehicleId){
        vehicleService.deleteVehicle(vehicleId);
        return ResponseEntity.ok("Vehicle deleted Successfully!");
    }


}
