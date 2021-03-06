class BreedsController < ApplicationController
  def index
    if search_params(params).empty?
      render json: BreedSerializer.new(Breed.all)
    else
      render json: BreedSerializer.new(Breed.search(search_params(params)))
    end
  end

  def show
    render_breed
  end

  private

  def search_params(params)
    params.permit(:name, :spellcaster, :monster_type, :size_category, :min_cr, :max_cr, :min_ac, :max_ac, :min_attack_bonus, :max_attack_bonus)
  end

  def render_breed
    @breed = find_breed
    if @breed
      render json: BreedSerializer.new(@breed)
    else
      render json: { message: 'That breed could not be found' }
    end
  end

  def find_breed
    Breed.find_by(id: params[:id])
  end
end
