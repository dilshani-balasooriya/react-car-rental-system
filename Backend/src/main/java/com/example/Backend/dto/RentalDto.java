package com.example.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RentalDto {
    private Long id;
    private Long vehicleId;
    private Long customerId;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private BigDecimal totalCost;
}
