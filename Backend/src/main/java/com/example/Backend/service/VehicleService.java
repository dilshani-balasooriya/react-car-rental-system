package com.example.Backend.service;

import com.example.Backend.dto.VehicleDto;

import java.util.List;

public interface VehicleService {
    VehicleDto createVehicle(VehicleDto vehicleDto);

    VehicleDto getVehicleById(Long vehicleId);

    List<VehicleDto> getAllVehicles();

    VehicleDto updateVehicle(Long vehicleId, VehicleDto updatedVehicle);

    void deleteVehicle(Long vehicleId);
}
