package com.example.service;

import com.example.model.Chart;
import com.example.repository.IChartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChartService implements IChartService{
    @Autowired
    private IChartRepository chartRepository;
    @Override
    public List<Chart> findAll() {
        return chartRepository.findAll();
    }
}
