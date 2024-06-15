package com.example.Backend.service.impl;

import com.example.Backend.Mapper.VehicleMapper;
import com.example.Backend.dto.VehicleDto;
import com.example.Backend.entity.RentalStatus;
import com.example.Backend.entity.Vehicle;
import com.example.Backend.exception.ResourceNotFoundException;
import com.example.Backend.repository.VehicleRepository;
import com.example.Backend.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private VehicleRepository vehicleRepository;
    @Override
    public VehicleDto createVehicle(VehicleDto vehicleDto) {

        Vehicle vehicle = VehicleMapper.maptoVehicle(vehicleDto);
        Vehicle savedVehicle = vehicleRepository.save(vehicle);
        return VehicleMapper.mapToVehicleDto(savedVehicle);
    }

    @Override
    public VehicleDto getVehicleById(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(() -> new ResourceNotFoundException("Vehicle isn't exists with given id : " + vehicleId));
        return VehicleMapper.mapToVehicleDto(vehicle);
    }

    @Override
    public List<VehicleDto> getAllVehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        return vehicles.stream().map((vehicle) -> VehicleMapper.mapToVehicleDto(vehicle)).collect(Collectors.toList());
    }

    @Override
    public VehicleDto updateVehicle(Long vehicleId, VehicleDto updatedVehicle) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(() -> new ResourceNotFoundException("Vehicle isn't exists with given id : " + vehicleId));

        vehicle.setMake(updatedVehicle.getMake());
        vehicle.setModel(updatedVehicle.getModel());
        vehicle.setYear(updatedVehicle.getYear());
        vehicle.setColor(updatedVehicle.getColor());
        vehicle.setType(updatedVehicle.getType());
        vehicle.setRentalStatus(RentalStatus.valueOf(updatedVehicle.getRentalStatus()));

        Vehicle updatedVehicleObj = vehicleRepository.save(vehicle);

        return VehicleMapper.mapToVehicleDto(updatedVehicleObj);

    }

    @Override
    public void deleteVehicle(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(() -> new ResourceNotFoundException("Vehicle isn't exists with given id : " + vehicleId));
        vehicleRepository.deleteById(vehicleId);
    }
}
