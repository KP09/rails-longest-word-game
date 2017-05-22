class GamesController < ApplicationController
  def game
    grid_array = []
    9.times { grid_array << ("A".."Z").to_a.sample }
    @grid = grid_array
    @start_time = Time.now.to_i
  end

  def score
    @attempt = params["attempt"]
    end_time = Time.now.to_i
    start_time = params["start"].to_i
    time_taken = end_time - start_time
    @score = (@attempt.length * (10 / (time_taken).to_f) * 10).floor
  end
end
