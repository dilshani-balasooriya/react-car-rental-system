package com.example.Backend.Mapper;

import com.example.Backend.dto.VehicleDto;
import com.example.Backend.entity.RentalStatus;
import com.example.Backend.entity.Vehicle;

public class VehicleMapper {
    public static VehicleDto mapToVehicleDto(Vehicle vehicle){
        return new VehicleDto(
                vehicle.getId(),
                vehicle.getMake(),
                vehicle.getModel(),
                vehicle.getYear(),
                vehicle.getColor(),
                vehicle.getType(),
                vehicle.getRentalStatus().toString()
        );
    }

    public static Vehicle maptoVehicle(VehicleDto vehicleDto){
        return new Vehicle(
                vehicleDto.getId(),
                vehicleDto.getMake(),
                vehicleDto.getModel(),
                vehicleDto.getYear(),
                vehicleDto.getColor(),
                vehicleDto.getType(),
                RentalStatus.valueOf(vehicleDto.getRentalStatus())
        );
    }
}
