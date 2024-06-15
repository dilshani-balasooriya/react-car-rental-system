package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDto {
    private Long id;
    private String make;
    private String model;
    private int year;
    private String color;
    private String type;
    private String rentalStatus;
}
