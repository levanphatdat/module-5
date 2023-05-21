package com.example.repository;

import com.example.model.Chart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IChartRepository extends JpaRepository<Chart, Integer> {
}
