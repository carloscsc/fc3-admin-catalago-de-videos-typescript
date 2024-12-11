import { Category } from "../category.entity"

describe('Category unit tests', () => {

  test('constructor', () => {
    const category = new Category({
      name: 'Category 1',
    })

    // expect(category.category_id).toBeUndefined()
    expect(category.category_id).toBeDefined()
    expect(category.name).toBe('Category 1')
    expect(category.created_at).toBeInstanceOf(Date)
    expect(category.is_active).toBe(true)
  })

  test('Shold deactivate a category', () => {
    const category = new Category({
      name: 'Category 1',
    })

    category.deactivate()

    expect(category.is_active).toBe(false)
  })

})